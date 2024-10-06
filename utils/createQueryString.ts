import type { ReadonlyURLSearchParams } from "next/navigation";

interface QueryParams {
  searchParams: ReadonlyURLSearchParams;
  name: string;
  value: string;
}
export const createQueryString = ({
  searchParams,
  name,
  value,
}: QueryParams): string => {
  const params = new URLSearchParams(searchParams.toString());

  const values = params.getAll(name);

  if (values.includes(value)) {
    params.delete(name, value);
  } else {
    params.append(name, value);
  }

  return params.toString();
};
