import dotenv from 'dotenv';

dotenv.config();

/**@type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['sequelize', 'pg', 'pg-hstore'],
    },
    images: {
        domains: ['lh3.googleusercontent.com'],
        remotePatterns: [
            {
              hostname: 'avatars.githubusercontent.com',
            }
          ],
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }
        return config
    }
}


export default nextConfig;