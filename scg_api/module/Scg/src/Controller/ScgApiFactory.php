<?php

namespace Scg\Controller;

use Zend\ServiceManager\Factory\FactoryInterface;
use Interop\Container\ContainerInterface;

class ScgApiFactory implements FactoryInterface
{
    /**
     * @param ContainerInterface $container
     * @param string $requestedName
     * @param array|null $options
     * @return object|SCGApiController
     * @throws \Exception
     */
    public function __invoke(ContainerInterface $container, $requestedName, array $options = null)
    {
        $config = $container->get("Config");
        if (!isset($config['google-place-api-key']) || !is_string($config['google-place-api-key'])) {
            throw new \Exception('No "google-place-api-key" found in the configuration');
        }

        return new ScgApiController($config['google-place-api-key']);
    }
}
