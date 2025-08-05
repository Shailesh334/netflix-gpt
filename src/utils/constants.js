

export const LOGO_URL =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

const apiUrl = import.meta.env.VITE_TMDB_API_KEY;
export const USER_AVATAR =
    "https://upload.wikimedia.org/wikipedia/en/3/3d/Po_from_DreamWorks_Animation%27s_Kung_Fu_Panda.png"


export const API_OPTIONS =  {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiUrl}`
  }
};


export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w500';