<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;
use App\Repository\AgentsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;


/**
 * @ApiResource(
 *    paginationEnabled=false,
 *     normalizationContext={"groups"={"agents:read"},"enable_max_depth"=true},
 *     denormalizationContext={"groups"={"agents:write"}},
 *          collectionOperations={
 *     "get",
 *     "post",
 *     },
 *
 *     itemOperations={
 *         "get",
 *         "put",
 *         "delete",
 *
 *     }
 *
 *
 * )
 * @ApiFilter(OrderFilter::class, properties={"lastName","birthDate"
 * ,"firstName","nationality","agentSpecialties"})
 * @ORM\Entity(repositoryClass=AgentsRepository::class)
 */
class Agents
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"agents:read","missions:read"})
     */
    private  $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"agents:read","agents:write","missions:read"})
     */
    private  $lastName;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"agents:read","agents:write","missions:read"})
     */
    private ?string $firstName;

    /**
     * @ORM\Column(type="date")
     * @Groups({"agents:read","agents:write","missions:read"})
     */
    private $birthDate;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"agents:read","agents:write","missions:read"})
     */
    private $indentificationCode;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"agents:read","agents:write","missions:read"})
     */
    private $nationality;


    /**
     * @ORM\ManyToMany(targetEntity=Specialties::class, inversedBy="agents")
     * @Groups({"agents:write","agents:read","missions:read"})
     * @MaxDepth(1)
     */
    private  $agentSpecialties;

    /**
     * @ORM\ManyToMany(targetEntity=Missions::class, inversedBy="agents")
     *
     */
    private  $agentsMissions;





    public function __construct()
    {
        $this->agentSpecialties = new ArrayCollection();
        $this->agentsMissions = new ArrayCollection();
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
        }

        return $this;
    }

    public function removeAgentSpecialty(Specialties $agentSpecialty): self
    {
        $this->agentSpecialties->removeElement($agentSpecialty);

        return $this;
    }

    /**
     * @return Collection|Missions[]
     */
    public function getAgentsMissions(): Collection
    {
        return $this->agentsMissions;
    }

    public function addAgentsMission(Missions $agentsMission): self
    {
        if (!$this->agentsMissions->contains($agentsMission)) {
            $this->agentsMissions[] = $agentsMission;
        }

        return $this;
    }

    public function removeAgentsMission(Missions $agentsMission): self
    {
        $this->agentsMissions->removeElement($agentsMission);

        return $this;
    }




}
