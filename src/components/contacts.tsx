export function Contacts() {
  const dataContacts = [
    {
      id: 12,
      name: "Rofiq",
    },
    {
      id: 9,
      name: "Jeffry",
    },
    {
      id: 10,
      name: "Bernhard",
    },
  ];

  return (
    <ul>
      {dataContacts.map((contact) => (
        <li key={contact.id}>{contact.name}</li>
      ))}
    </ul>
  );
}
