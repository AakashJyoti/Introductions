# Basic TypeScript:-

Make typescript to watch all your changes :- tsc -w

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

## Aliases

Is basically using predefined type to create a new type.

- type stringOrNumberArray = (string | number)[]
- type Guitarist = {
  name?: string;
  album: stringOrNumberArray
  };

Type and interfaces are deferent from each other

- interface PostId = stringOrNumberArray

## Literal types

- let userName: "Abba" | "Dabba" | "Jabba"
- userName = "Abba"

## Function Define

There are 3 way to define types
First one is:- (unable to define undefined value)

- let Subtract = (c: number, d: number): number => c - d

Second is:- (unable to define undefined value)

- type mathFunction = (a: number, b: number) => number
- let multiply: mathFunction = (c, d) => c \* d

Third is :- (undefined value can be defined)

- interface mathFunction {
  (a: number, b: number): number
  }
- let multiplyAliases: mathFunction = (a, b) => a + b

## Rest parameters

- const total = (...numS: number[]): number => numS.reduce((prev, curr) => prev + curr)

## Never Type

Its defined only while handling error and during infinite loop

- const createError = (errMsg: string): never => {
  throw new Error(errMsg);
  };

## Type assertions

- let a: One = "hello";
- let b = a as Two; //less specific
- let c = a as Three; // more specific
