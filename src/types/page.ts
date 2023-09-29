export interface IGetPageResponse {
  id: string;
  name: string;
  description: string;
}

export interface IUpdatePageParams {
  image_id?: string;
  description: string;
  is_public: boolean;
}

export interface IUpdatePageForm {
  name: string;

  description: string;

  is_public: boolean;
}
export interface IPageDetailResponse {
  id: string;
  name: string;
  description: string;
}
