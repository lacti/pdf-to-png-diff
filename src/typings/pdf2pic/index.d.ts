declare module "pdf2pic" {
  class PDF2Pic {
    constructor(args?: {
      quality?: number;
      density?: number;
      savename?: string;
      savedir?: string;
      format?: string;
      size?: string;
      compression?: string;
    });

    public getPage(path: string): Promise<string>;

    public convert(
      path: string,
      page?: number
    ): Promise<{
      name: string;
      size: string;
      path: string;
      page: number;
    }>;

    public convertBulk(
      path: string,
      pages?: number[]
    ): Promise<
      {
        name: string;
        size: string;
        path: string;
        page: number;
      }[]
    >;
  }

  export = PDF2Pic;
}
