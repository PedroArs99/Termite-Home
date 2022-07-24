import { io } from 'socket.io-client';
import type { Message } from 'src/models/message.model';
import { writable } from 'svelte/store';

export const messages = writable(new Array<Message>());

// Actions
export function initMessageTracking(): void {
  const socket = io('ws://localhost:3000');

  socket.on('message', (payload: Message) => {
    messages.update((store: Message[]) => [...store, payload]);
  });
}
