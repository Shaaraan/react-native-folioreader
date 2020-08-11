import { NativeModules } from 'react-native';

type FolioreaderType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Folioreader } = NativeModules;

export default Folioreader as FolioreaderType;
