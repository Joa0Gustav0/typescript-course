function App() {
  interface student {
    name: string;
    age: number;
    contact: string | number;
  }

  interface student {
    verified?: true;
  }

  const allStudents: Array<student> = [
    { name: "Gustavo", age: 26, contact: 32323232434 },
    { name: "Gustavo", age: 26, contact: 32323232434, verified: true },
    { name: "Gustavo", age: 26, contact: 32323232434 },
    { name: "Gustavo", age: 26, contact: 32323232434, verified: true },
    { name: "Gustavo", age: 26, contact: 32323232434, verified: true },
  ];

  return (
    <table>
      <thead>
        <th>Aluno</th>
        <th>Idade</th>
        <th>Contato</th>
        <th>Verificação</th>
      </thead>
      <tbody>
        {allStudents.map((student, i) => (
          <tr key={"student-" + i}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.contact}</td>
            <td>{student.verified ? "✅" : "❌"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
