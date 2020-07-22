import { takeLatest, put } from 'redux-saga/effects';

import {
  CHANGE_LANG,
  CHANGE_LANG_SUCCESS,
  CHANGE_LANG_FAILURE,
} from '@model';

import i18n from '../../../i18n';

function* sagaChangeLang(action) {

  try {
    i18n.changeLanguage(action.lang)
    yield put({ type: CHANGE_LANG_SUCCESS, lang: action.lang });
  } catch (err) {
    yield put({ type: CHANGE_LANG_FAILURE });

  }

}

export default function* watcChangeLang() {
  yield takeLatest(CHANGE_LANG, sagaChangeLang)
}
