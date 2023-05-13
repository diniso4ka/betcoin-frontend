import { IStateSchema } from '@/app/providers/StoreProvider';

export const getCounterValue = (state: IStateSchema) =>
    state.counter?.value || 0;
