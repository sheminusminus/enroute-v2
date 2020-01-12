import auth from '../auth/sagas';

export default function* rootSaga() {
  yield [
    auth(),
  ];
}
