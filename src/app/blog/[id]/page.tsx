import ButtonAction from "@/components/ButtonAction";
import ButtonReturn from "@/components/ButtonReturn";

const BlogDetailPage = () => {
  return (
    <div>
      <ButtonReturn />
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">Post One</h2>
        <ButtonAction />
      </div>
      <p className="text-slate-700">Post one content</p>
    </div>
  );
};

export default BlogDetailPage;
