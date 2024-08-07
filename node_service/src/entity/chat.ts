import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Conversation {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column('text')
  question: string | undefined;

  @Column('text')
  answer: string | undefined;

  @CreateDateColumn()
  createdAt: Date | undefined;
}
