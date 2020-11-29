import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";

import {ActionType} from "../../action";
import {checkAuth} from "../../api-action";
import {AuthorizationStatus, APIRoute} from "../../../const";
import {adapterUserToClient} from '../../../utils';

const api = createAPI(() => {});

const mockUserDataServerStyle = {
  "id": 1,
  "email": `sfsdf@mail.ru`,
  "name": `sfsdf`,
  "avatar_url": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`,
  "authorizationStatus": `AUTH`
};

const apiMock = new MockAdapter(api);

describe(`Async user-reducer operation work correctly`, () => {
  it(`Should make a correct authorizationCheck when 200`, () => {
    const dataMock = mockUserDataServerStyle;
    const dispatch = jest.fn();
    const userDataLoader = checkAuth();

    apiMock
      .onGet(APIRoute.login)
      .reply(200, dataMock);

    return userDataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_USER,
          payload: adapterUserToClient(dataMock),
        });
      });
  });

  it(`Should make a correct authorizationCheck when 401`, () => {
    const dispatch = jest.fn();
    const userDataLoader = checkAuth();

    apiMock
      .onGet(APIRoute.login)
      .reply(401, undefined);

    return userDataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.NO_AUTH,
        });
      });
  });
});
