import { ApolloQueryResult } from '@apollo/client';
import { type GroupChat } from 'types/Chat/type';

/** Organization member for direct chat creation. */
export interface InterfaceOrganizationMember {
  /** Member ID */
  id: string;

  /** Member name */
  name: string;

  /** Avatar URL */
  avatarURL?: string;

  /** Organization role */
  role: string;
}

/** Props for CreateDirectChat. */
export interface InterfaceCreateDirectChatProps {
  /** Toggle modal */
  toggleCreateDirectChatModal: () => void;

  /** Modal open state */
  createDirectChatModalisOpen: boolean;

  /** Refetch chats */
  chatsListRefetch: (
    variables?: Partial<{ id: string }> | undefined,
  ) => Promise<ApolloQueryResult<unknown>>;

  /** Existing chats */
  chats: GroupChat[];
}
