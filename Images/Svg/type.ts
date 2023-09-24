import { SvgContainer } from './style';

export interface SvgProps
  extends React.ComponentPropsWithoutRef<typeof SvgContainer> {
  width: number;
  height: number;
  viewBox: string;
  name?: string;
  children: React.ReactNode;
}
