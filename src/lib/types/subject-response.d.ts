export type DiplomaResponse = {
  metadata: MetaData;
  data: {
    id: string;
    title: string;
    description: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    immutable: boolean;
  }[];
};
