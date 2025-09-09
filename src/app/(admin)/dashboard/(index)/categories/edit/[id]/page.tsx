import React from "react";
import { redirect } from "next/navigation";
import FormCategory from "../../_components/form-category";
import { getCategoryById } from "../../lib/data";

type Tparams = {
	id: string;
};

interface EditPageProp {
	params: Tparams;
}

export default async function EditPage({ params }: EditPageProp) {
	const data = await getCategoryById(params.id);

	if (!data) {
		return redirect("/dashboard/categories");
	}

	console.log(data);

	return <FormCategory type="EDIT" data={data} />;
}
