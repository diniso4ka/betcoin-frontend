import { Flex, IFlexProps } from '../Flex/Flex';

type VStackProps = Omit<IFlexProps, 'direction'>;

export const VStack = (props: VStackProps) => (
    <Flex direction='COLUMN' {...props} />
);
