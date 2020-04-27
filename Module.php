<?php

use Omeka\Module\AbstractModule;
use Zend\EventManager\Event;
use Zend\EventManager\SharedEventManagerInterface;

class Module extends AbstractModule
{
    /** Module body **/

    /**
    * Get this module's configuration array.
    *
    * @return array
    */
    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';

    }

    public function addAsset(Event $event){

        if ($this->getServiceLocator()->get('Omeka\Status')->isSiteRequest()) {
            $view = $event->getTarget();

            echo '<style> #content {min-height: 50vh;} </style>';
        }



    }

    public function attachListeners(SharedEventManagerInterface $sharedEventManager)
    {
        $sharedEventManager->attach(
          '*',
          'view.layout',
          [$this, 'addAsset']
        );
    }


}
