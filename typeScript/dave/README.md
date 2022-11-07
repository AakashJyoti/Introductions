# Basic TypeScript:-

## Basic defines

- let myName: string
- let cost: number
- let isLoading: boolean
- let album: any

## Union defines

- let postId: number | string
- let isActive: number | boolean
- let getValue: string | boolean

## Special define

- let re: RegExp = /\w+/g

## Array define

- let brands: string[]
- let product: string[] | number[]
- let mixed: string[] | number[] | boolean[]

## Tuple define

Tuple define type in specific locked in element position and specific length of array

- let myTuple: [string, number, boolean]

## Objects define

- type defOnj = {
  name: string;
  active: boolean;
  album: (string | number)[]
  }

## Optional Property

use ? for make any property optional

- let name?: string

## Enums

Unlike most TypeScript features, Enums are not a type-level addition but something added to the language and runtime.

- enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
  }
