export interface InfoListProps {
    game?: string;
    data: Record<string, InfoData>;
    dataKeys: Array<string>;
    types?: string[] | null;
    url?: string;
}

export interface WeaponInfoProps {
    value: string;
    game: string;
}

export type InfoData = {
    name: string;
    type: string;
    description?: string;
    no_attach?: boolean;
    no_attach_info?: boolean;
};
