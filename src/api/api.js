import axios from 'axios';

// settings for axios
const instance = axios.create({
  baseURL: 'http://37.230.116.58/api/draft/',
  headers: {
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDI0MjI3OGIxNTBiYWExZjdlMjMwMTAyZjc4MGQyYjUzMjUyYWU0OGJiMzI3NmIwYzY1YWRlZTBiYWI2MThmOTQ2ODg0YzA2OTQ5Y2RiZmYiLCJpYXQiOiIxNjE1NzMzNTI3Ljg3NTg5NyIsIm5iZiI6IjE2MTU3MzM1MjcuODc1OTAxIiwiZXhwIjoiMTY0NzI2OTUyNy44NjA4NDciLCJzdWIiOiI4Iiwic2NvcGVzIjpbXX0.C64Jm-Vv65a_kzpIcAiSY5eheLgQAr3sMU62nOvirvPps9wYZf0d9ktluX6Tx9ECnSrMzfLG-VSma7rCKbp5zkHC1n75TUOqV_Sz2Pvtgi3Ezg_8-rE7_YlcbV7TMfLzr6hrBr1wDQOvKdMeliKC-6vKuOKyj-dNtwTRJFwVfvE5o_ez-8WKZizhULvoscnE_ZQadzJWw0DYIKhVJMNtB-mau0CUhu7oMtwzhOL100S-dcOVijgdSbz92WOA8rHbGr5qHrxsCVn6aCUWl5_1fDcuDl6tJVVi7iE2M0CX2rmcbML5Yw5vzmb5B2IEFdkR0l_Yvwc53YiOnV7Cq-JrwlEkclMq1zt_asaCyZxoOEmqktj39ZhrQsKNUurh6H1AUtxxCSwTvHtaHgO1AWcLGl8CbiDcX7xpMayWr6OkO3BXusnr9XGwo0wTrOGytGei0HMMm-PQ18xTOSETqz-RayCKX_2R4XLtcyKuZtsty1Ohx69qovUT2SsAeaewTC0oTK2WIg6Tmd2lZvLu2vhoC3VxiIa-c6vMF2_QK4Cdntpd9aKvCutgb7vkz5RzZxQALXWbuLN5MN6w_kWPonCWjomiO_ZowTL3SSlKQkSDW5L8xxRN_A6a97m_p81o5ooQ9_1VvIJX-MHdDsj6dE8tx_E_o1QpsmPhYzCfSNL3WsE',
    'Access-Control-Allow-Origin': true,
    'Access-Control-Allow-Credentials': true,
  },
});

// API for home page
export const homeAPI = {
  // This method get photos for home page
  fetchImages() {
    return instance.get('/photos').then((response) => response.data);
  },
};

// API for myPhotos page
export const myPhotosAPI = {
  // This method send photos to server
  fileUpload(photoFiles) {
    const formData = new FormData();
    formData.append('image', photoFiles);
    return instance
      .post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => response.data);
  },
};
