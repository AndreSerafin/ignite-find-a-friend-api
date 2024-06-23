import { Entity } from '@/core/entity';
import { UniqueEntityId } from '@/core/unique-entity-id';
import { Optional } from '@/@types/optional';
export interface OrgProps {
    name: string;
    address: string;
    whatsapp: string;
    authorName: string;
    cep: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    latitude: number;
    longitude: number;
    createdAt: Date;
    updatedAt?: Date;
}
export declare class Org extends Entity<OrgProps> {
    static create(props: Optional<OrgProps, 'createdAt'>, id?: UniqueEntityId): Org;
    get name(): string;
    set name(name: string);
    get address(): string;
    set address(address: string);
    get whatsapp(): string;
    set whatsapp(whatsapp: string);
    get authorName(): string;
    set authorName(authorName: string);
    get cep(): string;
    set cep(cep: string);
    get state(): string;
    set state(state: string);
    get city(): string;
    set city(city: string);
    get neighborhood(): string;
    set neighborhood(neighborhood: string);
    get street(): string;
    set street(street: string);
    get latitude(): number;
    set latitude(latitude: number);
    get longitude(): number;
    set longitude(longitude: number);
    get createdAt(): Date;
    get updatedAt(): Date | undefined;
    private touch;
}
