/**@type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
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