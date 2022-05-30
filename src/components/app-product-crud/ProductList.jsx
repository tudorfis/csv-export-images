import { Stack, TextStyle } from "@shopify/polaris";
import { ProductDelete } from "./ProductDelete";


export function ProductList({ products }) {
    return <>
        <Stack vertical>
            {products.edges.map(({ node: product }) => (
                <Stack.Item key={product.id}>
                    <Stack>
                        <TextStyle variation="code">Product 👉 </TextStyle>
                        <TextStyle variation="strong">{product.title}</TextStyle>
                        <ProductDelete productId={product.id} />
                    </Stack>
                </Stack.Item>
            ))}
        </Stack>
    </>
}

/**
 * OLD
 */
// export function ProductList({ products, reloadProducts }) {
//     return <>
//         <Stack vertical>
//             {products.edges.map(({ node: product }) => (
//                 <Stack.Item key={product.id}>
//                     <Stack>
//                         <TextStyle variation="code">Product 👉 </TextStyle>
//                         <TextStyle variation="strong">{product.title}</TextStyle>
//                         <ProductDelete
//                             reloadProducts={reloadProducts}
//                             productId={product.id}
//                         />
//                     </Stack>
//                 </Stack.Item>
//             ))}
//         </Stack>
//     </>
// }
