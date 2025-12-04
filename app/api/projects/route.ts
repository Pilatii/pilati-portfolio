import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

const databaseId = process.env.PROJECTS_DATABASE_ID as string;

export async function GET() {

	try {
		const response = await notion.databases.query({
			database_id: databaseId,
			sorts: [
				{ timestamp: "created_time", direction: "descending" }
			]
		});

		const projects = response.results.map((row: any) => ({
			id: row.id,
			title: row.properties.Name?.title?.[0]?.plain_text ?? "",
			url: row.properties.URL?.url ?? "",
			techs: row.properties.Tech?.multi_select?.map((t: any) => t.name) ?? [],
		}));

		return NextResponse.json({ projects });
	} catch (error) {
		console.error("Erro ao consultar Notion:", error);
		return NextResponse.json(
			{ error: "Erro ao consultar Notion" },
			{ status: 500 }
		);
	}
}
