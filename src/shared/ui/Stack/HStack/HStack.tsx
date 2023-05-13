import { Flex, IFlexProps } from '../Flex/Flex';

type HStackProps = Omit<IFlexProps, 'direction'>;

export const HStack = (props: HStackProps) => (
    <Flex direction='row' {...props} />
);
