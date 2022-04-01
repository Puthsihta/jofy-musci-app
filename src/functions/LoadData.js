import {loadIndustry} from '../actions/Industry';
import {loadSlide} from '../actions/Slide';
import {fetchBasicApi} from './PTFunction';
import {loadContact} from '../actions/Contact';
import {loadProvince} from '../actions/Province';
import {loadStatus} from '../actions/Status';

export async function loadData(dispatch) {
  dispatch(loadStatus(dispatch));
  fetchBasicApi('slide').then(slide => {
    dispatch(loadSlide(slide.data));
  });
  fetchBasicApi('industry').then(industry => {
    dispatch(loadIndustry(industry.data));
  });
  fetchBasicApi('contact').then(contact => {
    dispatch(loadContact(contact));
  });
  fetchBasicApi('province').then(province => {
    dispatch(loadProvince(province.data));
  });
}
