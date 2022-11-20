// Utility Types

// Partial
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "comp11",
  title: "Final report",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 90 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 90 });

// Required
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database
  return assign;
};
recordAssignment({ ...assignGraded, verified: true });

// Readonly
const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

// assignVerified.grade = 88

// Record
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "A",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 90 },
  Kelly: { assign1: 75, assign2: 80 },
};

// Pick
type AssignResult = Pick<Assignment, "studentId" | "grade">;
const score: AssignResult = {
  studentId: "k123",
  grade: 85,
};

// Omit
type AssignPreview = Omit<Assignment, "grade" | "verified">;
const preview: AssignPreview = {
  studentId: "k123",
  title: "Final project",
};

// Exclude
type AdjustedGrade = Exclude<LetterGrades, "U">;

// Extract
type HighGrades = Extract<LetterGrades, "A" | "B">;

// NonNullable
type AllPossibleGrades = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;

// ReturnType
const createNewAssign = (title: string, points: number) => {
  return { title, points };
};
type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// Parameters
type AssignParams = Parameters<typeof createNewAssign>;
const assignArgs: AssignParams = ["Generics", 100];
const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited  - helps is with the Return type of a Promise
interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUser = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

// type FetchUsersReturnType = ReturnType<typeof fetchUser>;
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUser>>;
fetchUser().then((users) => console.log(users));
