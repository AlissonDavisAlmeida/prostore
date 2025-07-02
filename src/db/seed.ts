import { PrismaClient } from '../generated/prisma';
import { sampleData } from './sample-data';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed...');

  for (const product of sampleData.products) {
    await prisma.product.create({
      data: {
        name: product.name,
        slug: product.slug,
        category: product.category,
        description: product.description,
        images: product.images,
        price: product.price,
        brand: product.brand,
        rating: product.rating,
        numReviews: product.numReviews,
        stock: product.stock,
        isFeatured: product.isFeatured || false,
        banner: product.banner || null,
      },
    });
  }

  console.log('✅ Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro durante o seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });