import { Category } from "@/app/type/types";

type ResponseData = {
  data: Category[];
};

type ApiResponse = {
  success: boolean;
  message: string;
  data: ResponseData;
};

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(
      "https://duas-page-server.up.railway.app/api/v1/categories",
      {
        next: {
          revalidate: 3600,
        },
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    const data: ApiResponse = await res.json();
    return data.data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
