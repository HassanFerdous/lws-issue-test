import {getAllPhotos} from "@/lib/image-data";
import {NextResponse} from "next/server";

export async function GET() {
	const data = await getAllPhotos();
	const modifiedData = data.map(({id, title, url}) => ({
		id,
		title,
		url,
	}));

	console.log({modifiedData});
	return NextResponse.json(modifiedData);
}
