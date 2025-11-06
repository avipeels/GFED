const test_data = [
  { user: 8, duration: 50, equipment: ["bench"] },
  { user: 7, duration: 150, equipment: ["dumbbell"] },
  { user: 1, duration: 10, equipment: ["barbell"] },
  { user: 7, duration: 100, equipment: ["bike", "kettlebell"] },
  { user: 7, duration: 200, equipment: ["bike"] },
  { user: 2, duration: 200, equipment: ["treadmill"] },
  { user: 2, duration: 200, equipment: ["bike"] },
];

type Session = { user: number; duration: number; equipment: Array<string> };

export default function mergeData(sessions: Array<Session>): Array<Session> {
  const results: { equipment: Set<string>; user: number; duration: number }[] =
    [];
  const sessionsMap = new Map();

  sessions.forEach((session) => {
    const user = session.user;
    const userExists = sessionsMap.has(user);
    if (userExists) {
      const currentUserSession = sessionsMap.get(user);
      const currentDuration = session.duration;
      currentUserSession.duration += currentDuration;
      session.equipment.forEach((equip) => {
        currentUserSession.equipment.add(equip);
      });
    } else {
      const clonedSessions = {
        ...session,
        equipment: new Set(session.equipment),
      };
      sessionsMap.set(user, clonedSessions);
      results.push(clonedSessions);
    }
  });

  // Convert Set back to array before returning
  return results.map((session) => ({
    ...session,
    equipment: Array.from(session.equipment).sort(),
  }));
}

const output = mergeData(test_data);
console.log(output);
