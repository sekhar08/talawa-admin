[Admin Docs](/)

***

# Interface: InterfaceCreateDirectChatProps

Defined in: [src/types/UserPortal/CreateDirectChat/interface.ts:20](https://github.com/PalisadoesFoundation/talawa-admin/blob/main/src/types/UserPortal/CreateDirectChat/interface.ts#L20)

Props for CreateDirectChat.

## Properties

### chats

> **chats**: [`GroupChat`](../../../../Chat/type/type-aliases/GroupChat.md)[]

Defined in: [src/types/UserPortal/CreateDirectChat/interface.ts:33](https://github.com/PalisadoesFoundation/talawa-admin/blob/main/src/types/UserPortal/CreateDirectChat/interface.ts#L33)

Existing chats

***

### chatsListRefetch()

> **chatsListRefetch**: (`variables?`) => `Promise`\<`ApolloQueryResult`\<`unknown`\>\>

Defined in: [src/types/UserPortal/CreateDirectChat/interface.ts:28](https://github.com/PalisadoesFoundation/talawa-admin/blob/main/src/types/UserPortal/CreateDirectChat/interface.ts#L28)

Refetch chats

#### Parameters

##### variables?

`Partial`\<\{ `id`: `string`; \}\>

#### Returns

`Promise`\<`ApolloQueryResult`\<`unknown`\>\>

***

### createDirectChatModalisOpen

> **createDirectChatModalisOpen**: `boolean`

Defined in: [src/types/UserPortal/CreateDirectChat/interface.ts:25](https://github.com/PalisadoesFoundation/talawa-admin/blob/main/src/types/UserPortal/CreateDirectChat/interface.ts#L25)

Modal open state

***

### toggleCreateDirectChatModal()

> **toggleCreateDirectChatModal**: () => `void`

Defined in: [src/types/UserPortal/CreateDirectChat/interface.ts:22](https://github.com/PalisadoesFoundation/talawa-admin/blob/main/src/types/UserPortal/CreateDirectChat/interface.ts#L22)

Toggle modal

#### Returns

`void`
