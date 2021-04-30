import { Publisher, Subjects, TicketCreatedEvent } from '@youngwonseo/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
