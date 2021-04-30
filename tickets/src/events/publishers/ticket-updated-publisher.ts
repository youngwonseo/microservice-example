import { Publisher, Subjects, TicketUpdatedEvent } from '@youngwonseo/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
