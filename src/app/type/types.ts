export type SubCategory = {
  id: number;
  cat_id: number;
  subcat_id: number;
  subcat_name_bn: string;
  subcat_name_en: string;
  no_of_dua: number;
};

export type Category = {
  id: number;
  cat_id: number;
  cat_name_bn: string;
  cat_name_en: string;
  no_of_subcat: number;
  no_of_dua: number;
  cat_icon: string;
  subCategories: SubCategory[];
};

export type Dua = {
  id: number;
  cat_id: number;
  subcat_id: number;
  dua_id: number;
  dua_name_bn: string;
  dua_name_en: string;
  top_bn: string | undefined;
  top_en: string | undefined;
  dua_arabic: string | undefined;
  dua_indopak: string | undefined;
  clean_arabic: string | undefined;
  transliteration_bn: string | undefined;
  transliteration_en: string | undefined;
  translation_bn: string | undefined;
  translation_en: string | undefined;
  bottom_bn: string | undefined;
  bottom_en: string | undefined;
  refference_bn: string;
  refference_en: string;
  audio: string | undefined;
  subCategory?: {
    id: number;
    cat_id: number;
    subcat_id: number;
    subcat_name_bn: string;
    subcat_name_en: string;
    no_of_dua: number;
  };
};
