<?php

namespace App\Security;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

class AccessDeniedHandler implements \Symfony\Component\Security\Http\Authorization\AccessDeniedHandlerInterface
{

    /**
     * @inheritDoc
     */
    public function handle(Request $request, AccessDeniedException $accessDeniedException): ?Response
    {


        $code =$accessDeniedException->getCode();
        $content="<h1>  $code Vous n'avez pas les autorisation nécessaire pour 
        accéder à cette page </h1>";
        return new Response($content, 403);
    }
}