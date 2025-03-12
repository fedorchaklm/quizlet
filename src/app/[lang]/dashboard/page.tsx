const Page = async ({
                        params,
                    }: {
    params: Promise<{ lang: string }>
}) => {
    const { lang } = await params;
    console.log('>', { lang });
    return (
        <div>App</div>
    );
};

export default Page;