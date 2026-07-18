interface SchemaScriptProps {
  schema: object | object[];
  id?: string;
}

export default function SchemaScript({ schema, id }: SchemaScriptProps) {
  const schemas = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={id ? `${id}-${i}` : i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
