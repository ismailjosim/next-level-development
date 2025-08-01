import React from 'react';

const DynamicProductPage = async ({ params, searchParams }) => {
    const productId = await params.productId
    const category = await searchParams.category
    console.log(category);

    return (
        <div>
            <h3>Dynamic Product page {productId}</h3>
        </div>
    );
};

export default DynamicProductPage;
