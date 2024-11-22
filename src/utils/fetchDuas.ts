import { Dua } from "@/app/type/types";

type ResponseData = {
  data: Dua[];
};

type ApiResponse = {
  success: boolean;
  message: string;
  data: ResponseData;
};

export const fetchDuas = async (catId: number): Promise<Dua[]> => {
  try {
    const url = `https://duas-page-server.up.railway.app/api/v1/duas?cat=${catId}`;
    console.log("Fetching duas from:", url);

    const res = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.error("Fetch failed with status:", res.status);
      console.error("Response:", await res.text());
      return [];
    }

    const data: ApiResponse = await res.json();
    return data.data.data;
  } catch (error) {
    console.error("Error fetching duas:", error);
    return [];
  }
};
