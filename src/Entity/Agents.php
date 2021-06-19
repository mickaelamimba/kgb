<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\AgentsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=AgentsRepository::class)
 */
class Agents
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $lastName;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $firstName;

    /**
     * @ORM\Column(type="date")
     */
    private $birthDate;

    /**
     * @ORM\Column(type="bigint")
     */
    private $indentificationCode;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nationality;

    /**
     * @ORM\OneToMany(targetEntity=Specialties::class, mappedBy="agents")
     */
    private $agentSpecialties;

    public function __construct()
    {
        $this->agentSpecialties = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getBirthDate(): ?\DateTimeInterface
    {
        return $this->birthDate;
    }

    public function setBirthDate(\DateTimeInterface $birthDate): self
    {
        $this->birthDate = $birthDate;

        return $this;
    }

    public function getIndentificationCode(): ?string
    {
        return $this->indentificationCode;
    }

    public function setIndentificationCode(string $indentificationCode): self
    {
        $this->indentificationCode = $indentificationCode;

        return $this;
    }

    public function getNationality(): ?string
    {
        return $this->nationality;
    }

    public function setNationality(string $nationality): self
    {
        $this->nationality = $nationality;

        return $this;
    }

    /**
     * @return Collection|Specialties[]
     */
    public function getAgentSpecialties(): Collection
    {
        return $this->agentSpecialties;
    }

    public function addAgentSpecialty(Specialties $agentSpecialty): self
    {
        if (!$this->agentSpecialties->contains($agentSpecialty)) {
            $this->agentSpecialties[] = $agentSpecialty;
            $agentSpecialty->setAgents($this);
        }

        return $this;
    }

    public function removeAgentSpecialty(Specialties $agentSpecialty): self
    {
        if ($this->agentSpecialties->removeElement($agentSpecialty)) {
            // set the owning side to null (unless already changed)
            if ($agentSpecialty->getAgents() === $this) {
                $agentSpecialty->setAgents(null);
            }
        }

        return $this;
    }
}
