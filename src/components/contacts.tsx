export function Contacts() {
  const dataContacts = [
    {
      id: 1,
      name: "Rofiq",
    },
    {
      id: 2,
      name: "Jeffry",
    },
    {
      id: 3,
      name: "Bernhard",
    },
  ];

  return (
    <ul>
      {dataContacts.map((contact) => {
        return;
        <li key={contact.id}>{contact.name}</li>;
      })}
    </ul>
  );
}
