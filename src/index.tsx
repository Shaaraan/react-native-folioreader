import { NativeModules } from 'react-native';

type FolioreaderType = {
  multiply(a: number, b: number): Promise<number>;
  openEpub(epubPath: string): void;
};

const { Folioreader } = NativeModules;

export default Folioreader as FolioreaderType;
