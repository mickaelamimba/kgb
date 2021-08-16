<?php

namespace App\Security;

use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;

class AuthenticationEntryPoint implements \Symfony\Component\Security\Http\EntryPoint\AuthenticationEntryPointInterface
{

    private UrlGeneratorInterface $urlGenerator;

    public function __construct(UrlGeneratorInterface $urlGenerator)
    {
        $this->urlGenerator = $urlGenerator;
    }
    /**
     * @inheritDoc
     */
    public function start(Request $request, AuthenticationException $authException = null):RedirectResponse
    {
        $request->getSession()->getFlashBag()->add('note', 'You have to login in order to access this page.');
        return new RedirectResponse($this->urlGenerator->generate('app_login'));
    }
}