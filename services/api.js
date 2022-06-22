import Airtable from 'airtable';

export async function getProjects() {
  const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);
  const records = await base(process.env.AIRTABLE_TABLE_ID).select({}).all()
  const projects = records.map(record => (
    {
      title: record.fields.Projeto,
      img: record.fields.Imagens[0].url,
      description: record.fields['Descrição'],
      href: `/projetos/${record.fields.Projeto}`,
    }
  ))
  return projects;
}