import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'ConverterTransaction' })
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    from : string;

    @Column()
    to : string;

    @Column()
    fromAmount : number;

    @Column()
    toAmount : number;

    @Column()
    createdAt: Date;
}
